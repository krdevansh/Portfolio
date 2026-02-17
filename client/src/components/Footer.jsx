import Container from "./Container"

export default function Footer() {
  return (
    <footer className="border-t py-10 mt-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-70 text-sm">
            © {new Date().getFullYear()} Kumar Devansh. All rights reserved.
          </p>

          <div className="flex gap-4 items-center flex-wrap justify-center">
            <a
              href="https://github.com/krdevansh"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/krdevansh"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kumardevanshd3vil@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Email
            </a>

            <a
  href="/Devansh General CV.pdf"
  target="_blank"
  rel="noreferrer"
  className="hover:underline"
>
  Resume
</a>

    
          </div>
        </div>
      </Container>
    </footer>
  )
}
