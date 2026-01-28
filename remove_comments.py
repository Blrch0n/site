#!/usr/bin/env python3
"""
TSX Comment Remover
Removes single-line, multi-line, and JSX comments from TypeScript React files.
"""

import os
import re
import sys
from pathlib import Path
from typing import List


class TSXCommentRemover:
    def __init__(self, root_dir: str):
        self.root_dir = Path(root_dir)
        self.files_processed = 0
        self.comments_removed = 0
    
    def find_tsx_files(self) -> List[Path]:
        """Find all .tsx files in the directory tree."""
        tsx_files = []
        for file in self.root_dir.rglob("*.tsx"):
            tsx_files.append(file)
        return sorted(tsx_files)
    
    def remove_comments(self, content: str) -> tuple[str, int]:
        """
        Remove all types of comments from TSX content:
        - Single-line comments: // ...
        - Multi-line comments: /* ... */
        - JSX comments: {/* ... */}
        
        Returns tuple of (cleaned_content, number_of_comments_removed)
        """
        comments_count = 0
        
        # State machine variables
        result = []
        i = 0
        length = len(content)
        
        while i < length:
            # Check for string literals (single quotes)
            if content[i] == "'" and (i == 0 or content[i-1] != '\\'):
                result.append(content[i])
                i += 1
                # Skip everything until closing quote
                while i < length:
                    if content[i] == '\\' and i + 1 < length:
                        result.append(content[i:i+2])
                        i += 2
                    elif content[i] == "'":
                        result.append(content[i])
                        i += 1
                        break
                    else:
                        result.append(content[i])
                        i += 1
                continue
            
            # Check for string literals (double quotes)
            if content[i] == '"' and (i == 0 or content[i-1] != '\\'):
                result.append(content[i])
                i += 1
                # Skip everything until closing quote
                while i < length:
                    if content[i] == '\\' and i + 1 < length:
                        result.append(content[i:i+2])
                        i += 2
                    elif content[i] == '"':
                        result.append(content[i])
                        i += 1
                        break
                    else:
                        result.append(content[i])
                        i += 1
                continue
            
            # Check for template literals (backticks)
            if content[i] == '`' and (i == 0 or content[i-1] != '\\'):
                result.append(content[i])
                i += 1
                # Skip everything until closing backtick
                while i < length:
                    if content[i] == '\\' and i + 1 < length:
                        result.append(content[i:i+2])
                        i += 2
                    elif content[i] == '`':
                        result.append(content[i])
                        i += 1
                        break
                    else:
                        result.append(content[i])
                        i += 1
                continue
            
            # Check for JSX comments: {/* ... */}
            if i + 3 < length and content[i:i+3] == '{/*':
                comments_count += 1
                i += 3
                # Find the closing */}
                while i < length:
                    if i + 2 < length and content[i:i+3] == '*/}':
                        i += 3
                        break
                    i += 1
                continue
            
            # Check for multi-line comments: /* ... */
            if i + 1 < length and content[i:i+2] == '/*':
                comments_count += 1
                i += 2
                # Find the closing */
                while i < length:
                    if i + 1 < length and content[i:i+2] == '*/':
                        i += 2
                        break
                    i += 1
                continue
            
            # Check for single-line comments: // ...
            if i + 1 < length and content[i:i+2] == '//':
                comments_count += 1
                # Skip until end of line
                while i < length and content[i] not in ['\n', '\r']:
                    i += 1
                # Keep the newline character
                if i < length and content[i] in ['\n', '\r']:
                    result.append(content[i])
                    i += 1
                    # Handle \r\n
                    if i < length and content[i-1] == '\r' and content[i] == '\n':
                        result.append(content[i])
                        i += 1
                continue
            
            # Regular character
            result.append(content[i])
            i += 1
        
        return ''.join(result), comments_count
    
    def clean_empty_lines(self, content: str) -> str:
        """
        Remove excessive empty lines (more than 2 consecutive empty lines).
        Keep reasonable spacing for readability.
        """
        lines = content.split('\n')
        result = []
        empty_count = 0
        
        for line in lines:
            if line.strip() == '':
                empty_count += 1
                if empty_count <= 2:
                    result.append(line)
            else:
                empty_count = 0
                result.append(line)
        
        return '\n'.join(result)
    
    def process_file(self, file_path: Path, dry_run: bool = False) -> bool:
        """
        Process a single TSX file to remove comments.
        
        Args:
            file_path: Path to the TSX file
            dry_run: If True, don't write changes, just report what would be done
        
        Returns:
            True if file was modified, False otherwise
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Remove comments
            cleaned_content, comments_found = self.remove_comments(original_content)
            
            # Clean excessive empty lines
            cleaned_content = self.clean_empty_lines(cleaned_content)
            
            if comments_found > 0:
                rel_path = file_path.relative_to(self.root_dir)
                print(f"  {'[DRY RUN] ' if dry_run else ''}Processing: {rel_path}")
                print(f"    Found {comments_found} comment(s)")
                
                if not dry_run:
                    # Create backup
                    backup_path = file_path.with_suffix('.tsx.backup')
                    with open(backup_path, 'w', encoding='utf-8') as f:
                        f.write(original_content)
                    
                    # Write cleaned content
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(cleaned_content)
                    
                    print(f"    ✓ Saved (backup: {backup_path.name})")
                
                self.comments_removed += comments_found
                return True
            
            return False
            
        except Exception as e:
            print(f"  ✗ Error processing {file_path}: {e}")
            return False
    
    def run(self, dry_run: bool = False):
        """
        Main execution method.
        
        Args:
            dry_run: If True, show what would be done without making changes
        """
        print("=" * 70)
        print("TSX Comment Remover")
        print("=" * 70)
        print(f"Root directory: {self.root_dir.absolute()}")
        
        if dry_run:
            print("\n⚠️  DRY RUN MODE - No files will be modified\n")
        else:
            print("\n⚠️  This will modify your files! Backups will be created.\n")
        
        # Find all TSX files
        tsx_files = self.find_tsx_files()
        
        if not tsx_files:
            print("No .tsx files found!")
            return
        
        print(f"Found {len(tsx_files)} .tsx file(s)\n")
        
        # Process each file
        for file_path in tsx_files:
            if self.process_file(file_path, dry_run):
                self.files_processed += 1
        
        # Summary
        print("\n" + "=" * 70)
        print("Summary")
        print("=" * 70)
        print(f"Files processed: {self.files_processed}")
        print(f"Total comments removed: {self.comments_removed}")
        
        if not dry_run and self.files_processed > 0:
            print("\n✓ All files processed successfully!")
            print("  Backups saved with .tsx.backup extension")
        elif dry_run:
            print("\n  Run without --dry-run flag to apply changes")


def main():
    """Main entry point."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="Remove all comments from TSX files in a directory tree",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run (preview changes without modifying files)
  python remove_comments.py --dry-run
  
  # Remove comments from current directory
  python remove_comments.py
  
  # Remove comments from specific directory
  python remove_comments.py --dir /path/to/project
  
  # Restore from backups
  find . -name "*.tsx.backup" -exec bash -c 'mv "$0" "${0%.backup}"' {} \\;
        """
    )
    
    parser.add_argument(
        '--dir',
        type=str,
        default='.',
        help='Root directory to search for .tsx files (default: current directory)'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Preview changes without modifying files'
    )
    
    args = parser.parse_args()
    
    # Validate directory
    root_dir = Path(args.dir).resolve()
    if not root_dir.exists():
        print(f"Error: Directory '{root_dir}' does not exist!")
        sys.exit(1)
    
    if not root_dir.is_dir():
        print(f"Error: '{root_dir}' is not a directory!")
        sys.exit(1)
    
    # Run the remover
    remover = TSXCommentRemover(root_dir)
    remover.run(dry_run=args.dry_run)


if __name__ == "__main__":
    main()
