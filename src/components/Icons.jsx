function Icons() {
  return (
    <div className="flex items-center gap-2 text-white sm:gap-1 md:gap-2 max-[480px]:gap-1">
      {/* X (Twitter) */}
      <a href="#" aria-label="X" className="hover:opacity-80">
        <svg className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 max-[480px]:w-5 max-[480px]:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.25 4.25h3.5l4.25 5.92 4.25-5.92h3.5l-6.25 8.68 6.5 8.82h-3.5l-4.5-6.09-4.5 6.09h-3.5l6.5-8.82z"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href="#" aria-label="Instagram" className="hover:opacity-80">
        <svg className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 max-[480px]:w-5 max-[480px]:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      {/* YouTube */}
      <a href="#" aria-label="YouTube" className="hover:opacity-80">
        <svg className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 max-[480px]:w-5 max-[480px]:h-5" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="10,9 16,12 10,15" fill="currentColor"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
        <svg className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 max-[480px]:w-5 max-[480px]:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <rect x="6" y="9" width="3" height="9" fill="currentColor" stroke="none"/>
          <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
          <rect x="11" y="13" width="3" height="5" fill="currentColor" stroke="none"/>
          <path d="M13 13v-2a2 2 0 1 1 4 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </a>
    </div>
  );
}

export default Icons;