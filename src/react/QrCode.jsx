import QrImg from "../assets/images/image-qr-code.png";

export default function QrCode() {
  return (
    <>
      <div className="container">
        <picture>
          <img src={QrImg} alt="qr_code" />
        </picture>
        <article>
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the Qr code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </article>
      </div>
    </>
  );
}
