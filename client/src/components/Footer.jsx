import Container from "./Container"

export default function Footer() {
  return (
    <footer className="border-t py-10 mt-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-70">
            © {new Date().getFullYear()} Kumar Devansh. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/krdevansh"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/krdevansh"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kumardevanshd3vil@gmail.com"
              className="hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
