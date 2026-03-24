import Container from "./Container"

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 mt-10 bg-black/40 backdrop-blur-md relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="opacity-60 text-sm tracking-wide">
            © {new Date().getFullYear()} Kumar Devansh. Building the future.
          </p>

          <div className="flex gap-6 items-center flex-wrap justify-center font-medium text-sm">
            <a
              href="https://github.com/krdevansh"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/krdevansh"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kumardevanshd3vil@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Email
            </a>

            <a
              href="/Devansh General CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
