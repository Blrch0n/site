export function Footer() {
  return (
    <footer className="surface border-t border-custom">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 accent-bg rounded-xl flex items-center justify-center font-bold text-white">
                S&C
              </div>
              <span className="font-bold text-lg">Sys&CoTech</span>
            </div>
            <p className="text-muted text-sm">
              Технологи, инженерчлэл, дизайныг судлах оюутны клуб
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Бидний тухай
                </a>
              </li>
              <li>
                <a
                  href="#trainings"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Сургалтууд
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Нийгэмлэг
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Асуулт
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Нөөц</h4>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Төслүүд
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Мэдээлэл
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Хамтрагчид
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>📧 info@syscotech.mn</li>
              <li>📍 Улаанбаатар, Монгол</li>
              <li className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 surface rounded-lg flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 surface rounded-lg flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 surface rounded-lg flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                >
                  <span className="text-lg">@</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-custom text-center text-muted text-sm">
          <p>© 2026 Sys&CoTech. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
