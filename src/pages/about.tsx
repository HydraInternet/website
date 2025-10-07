const styles = {
  title: "text-4xl font-bold mb-4",
  h1: "text-2xl font-semibold mb-2",
  paragraph: "mb-4",
};

export default function AboutPage() {
  return (
    <div className="grow mt-4 mx-2">
      <h1 className={styles.title}>About Us</h1>

      {/* Our Why */}
      <h2 className={styles.h1}>Our Why</h2>
      <p className={styles.paragraph}>
        The future of technology is heading in a bleak direction. We've gone
        from a libertarian's dream of free, open information to a platform that
        is designed to surveil, manipulate, and control.
      </p>
      <p className={styles.paragraph}>
        Something as important as the internet should not be controlled by the
        few. The people have created the internet; corporations are just
        squatters trying to monotise our hard work.
      </p>

      {/* Inspiration */}
      <h2 className={styles.h1}>Inspiration</h2>
      <ul className="pl-5 list-disc">
        <li>
          <a
            href="https://www.theguardian.com/commentisfree/2025/aug/09/uk-online-safety-act-internet-censorship-world-following-suit"
            className="link"
          >
            The UK’s Online Safety Act is a licence for censorship – and the
            rest of the world is following suit.
          </a>
        </li>
        <li>
          <a
            href="https://fortune.com/2025/09/28/larry-ellison-ai-surveillance-oracle-tiktok-deal-social-media/"
            className="link"
          >
            Larry Ellison once predicted ‘citizens will be on their best
            behavior’ amid constant recording.
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Great_Firewall"
            className="link"
          >
            China's Great Firewall
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Internet_censorship_in_Hong_Kong"
            className="link"
          >
            Internet censorship in Hong Kong
          </a>
        </li>
      </ul>
    </div>
  );
}
