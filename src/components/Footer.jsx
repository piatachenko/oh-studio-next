export default function Footer() {
  return (
    <footer>
      <div>
        <div className="flex items-center justify-between text-sm mb-[2.025rem] mx-[2.5rem]">
          <div className="flex items-center">
            <div>
              <img src="/logo.svg" alt="" className="w-8 h-8 mr-3" />
            </div>
            <div>© Oli Harris 2023</div>
          </div>
          <div className="flex items-center gap-[0.9rem]">
            <div>
              <a href="https://twitter.com/olvhrs">Twitter</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/oliiharris/">Linkedin</a>
            </div>
            <div>
              <a href="mailto:oli@oh.studio">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
