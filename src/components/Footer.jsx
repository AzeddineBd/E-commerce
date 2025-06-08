import logoFooter from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-color)] text-[var(--background-color)]">
      <div className="container mx-auto p-8">
        <div>
          <hr className="border-0 h-0.5 bg-[var(--background-color)] my-4" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2 ">
          {/* Logo And P */}
          <div>
            <div className="mb-2">
              <a href="#">
                <img
                  src={logoFooter}
                  alt="logo"
                  className="w-[140px] md:w-56"
                />
              </a>
            </div>
            <p className="font-light">
              Your natural candle made for <br /> your home and for your
              wellness.
            </p>
          </div>

          {/* List */}
          <div className="flex flex-wrap md:flex-row gap-12 leading-12 font-medium">
            <div>
              <ul>
                <li>
                  <a href="#" className="text-[var(--primary-color)]">
                    Discovery
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">New season</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most searched</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most selled</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" className="text-[var(--primary-color)]">
                    Discovery
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">New season</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most searched</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most selled</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" className="text-[var(--primary-color)]">
                    Discovery
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">New season</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most searched</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Most selled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
