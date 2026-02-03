#!/usr/bin/env python3
"""
TSX Comment Remover

This script removes all types of comments from TSX/TS files:
- Single-line comments: // comment
- Multi-line comments: /* comment */
- JSX comments: {/* comment */}

Usage:
    python remove_tsx_comments.py <file_or_directory>
    python remove_tsx_comments.py --help
"""

import re
import os
import sys
import argparse
from pathlib import Path
from typing import List, Tuple


class TSXCommentRemover:
    """Removes various types of comments from TSX/TS files."""
    
    def __init__(self):
        # Pattern for single-line comments
        self.single_line_pattern = re.compile(r'//.*?$', re.MULTILINE)
        
        # Pattern for multi-line comments (/* ... */)
        self.multi_line_pattern = re.compile(r'/\*.*?\*/', re.DOTALL)
        
        # Pattern for JSX comments ({/* ... */})
        self.jsx_comment_pattern = re.compile(r'\{\s*/\*.*?\*/\s*\}', re.DOTALL)
        
        # Pattern to detect strings (to avoid removing comment-like content in strings)
        self.string_pattern = re.compile(r'(["\'])(?:(?=(\\?))\2.)*?\1')
        
    def preserve_strings(self, content: str) -> Tuple[str, List[str]]:
        """
        Replace all strings with placeholders and return them separately.
        This prevents removing comment-like content inside strings.
        """
        strings = []
        
        def replacer(match):
            strings.append(match.group(0))
            return f'__STRING_PLACEHOLDER_{len(strings) - 1}__'
        
        modified_content = self.string_pattern.sub(replacer, content)
        return modified_content, strings
    
    def restore_strings(self, content: str, strings: List[str]) -> str:
        """Restore the original strings back to content."""
        for i, string in enumerate(strings):
            placeholder = f'__STRING_PLACEHOLDER_{i}__'
            content = content.replace(placeholder, string)
        return content
    
    def remove_comments(self, content: str) -> str:
        """
        Remove all types of comments from TSX/TS content.
        
        Args:
            content: The file content as a string
            
        Returns:
            Content with comments removed
        """
        # Step 1: Preserve strings
        content, strings = self.preserve_strings(content)
        
        # Step 2: Remove JSX comments {/* ... */}
        content = self.jsx_comment_pattern.sub('', content)
        
        # Step 3: Remove multi-line comments /* ... */
        content = self.multi_line_pattern.sub('', content)
        
        # Step 4: Remove single-line comments //
        content = self.single_line_pattern.sub('', content)
        
        # Step 5: Restore strings
        content = self.restore_strings(content, strings)
        
        # Step 6: Clean up excessive blank lines (more than 2 consecutive)
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        return content
    
    def process_file(self, file_path: Path, backup: bool = True, dry_run: bool = False) -> bool:
        """
        Process a single TSX/TS file to remove comments.
        
        Args:
            file_path: Path to the file
            backup: Create a backup file before modifying
            dry_run: Only show what would be changed without modifying
            
        Returns:
            True if file was processed successfully
        """
        try:
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Remove comments
            cleaned_content = self.remove_comments(original_content)
            
            # Check if there are changes
            if original_content == cleaned_content:
                print(f"✓ {file_path}: No comments found")
                return True
            
            if dry_run:
                print(f"⚠ {file_path}: Would remove comments (dry run)")
                return True
            
            # Create backup if requested
            if backup:
                backup_path = file_path.with_suffix(file_path.suffix + '.bak')
                with open(backup_path, 'w', encoding='utf-8') as f:
                    f.write(original_content)
                print(f"📦 Created backup: {backup_path}")
            
            # Write cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"✓ {file_path}: Comments removed successfully")
            return True
            
        except Exception as e:
            print(f"✗ {file_path}: Error - {e}", file=sys.stderr)
            return False
    
    def process_directory(self, directory: Path, backup: bool = True, 
                         dry_run: bool = False, recursive: bool = True) -> Tuple[int, int]:
        """
        Process all TSX/TS files in a directory.
        
        Args:
            directory: Path to the directory
            backup: Create backup files before modifying
            dry_run: Only show what would be changed without modifying
            recursive: Process subdirectories recursively
            
        Returns:
            Tuple of (successful_count, failed_count)
        """
        pattern = '**/*.tsx' if recursive else '*.tsx'
        tsx_files = list(directory.glob(pattern))
        
        # Also include .ts files
        pattern = '**/*.ts' if recursive else '*.ts'
        ts_files = list(directory.glob(pattern))
        
        all_files = tsx_files + ts_files
        
        if not all_files:
            print(f"No TSX/TS files found in {directory}")
            return 0, 0
        
        print(f"\nFound {len(all_files)} TSX/TS file(s) to process\n")
        
        successful = 0
        failed = 0
        
        for file_path in sorted(all_files):
            if self.process_file(file_path, backup, dry_run):
                successful += 1
            else:
                failed += 1
        
        return successful, failed


def main():
    parser = argparse.ArgumentParser(
        description='Remove all types of comments from TSX/TS files',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Remove comments from a single file
  python remove_tsx_comments.py components/Footer.tsx
  
  # Remove comments from all TSX files in a directory (recursive)
  python remove_tsx_comments.py components/
  
  # Dry run (show what would be changed without modifying)
  python remove_tsx_comments.py components/ --dry-run
  
  # Process without creating backups
  python remove_tsx_comments.py components/ --no-backup
  
  # Process only current directory (not recursive)
  python remove_tsx_comments.py components/ --no-recursive
        """
    )
    
    parser.add_argument(
        'path',
        type=str,
        help='Path to TSX/TS file or directory'
    )
    
    parser.add_argument(
        '--no-backup',
        action='store_true',
        help='Do not create backup files (.bak)'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be changed without modifying files'
    )
    
    parser.add_argument(
        '--no-recursive',
        action='store_true',
        help='Do not process subdirectories recursively'
    )
    
    args = parser.parse_args()
    
    # Validate path
    path = Path(args.path)
    if not path.exists():
        print(f"Error: Path '{path}' does not exist", file=sys.stderr)
        return 1
    
    # Create remover instance
    remover = TSXCommentRemover()
    
    # Process file or directory
    if path.is_file():
        if not (path.suffix in ['.tsx', '.ts']):
            print(f"Error: File must have .tsx or .ts extension", file=sys.stderr)
            return 1
        
        success = remover.process_file(
            path, 
            backup=not args.no_backup,
            dry_run=args.dry_run
        )
        return 0 if success else 1
    
    elif path.is_dir():
        successful, failed = remover.process_directory(
            path,
            backup=not args.no_backup,
            dry_run=args.dry_run,
            recursive=not args.no_recursive
        )
        
        print(f"\n{'='*50}")
        print(f"Summary:")
        print(f"  Successful: {successful}")
        print(f"  Failed: {failed}")
        print(f"  Total: {successful + failed}")
        print(f"{'='*50}\n")
        
        return 0 if failed == 0 else 1
    
    else:
        print(f"Error: Invalid path type", file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main())
