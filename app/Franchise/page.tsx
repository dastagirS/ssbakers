
export default function page() {
  return (
    <section className="franchise-main">
      <div className="franchise-about1">
        <img
          src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1678215100/ssbakers/franchise/franchise-img1_dhhxoh.png"
          className="franchise-about1-art"
        />
        <h4 className="franchise-about1-title">Join the chain of sweetness</h4>
        <p className="franchise-about1-para">
          If you're interested in joining our cake shop franchise, we'd love to
          hear from you! At <strong>SS Bakers</strong>, we're committed to
          providing our customers with high-quality baked goods and exceptional
          customer service. As a franchisee, you'll have access to our
          time-tested recipes, extensive training programs, and ongoing support
          to help you build a successful business. Whether you're an experienced
          business owner or just starting out, we welcome the opportunity to
          work with individuals who share our passion for baking and our
          commitment to excellence.
        </p>
      </div>
      <div className="franchise-about2">
        <p className="franchise-about2-para">
          Joining our franchise is a great way to become part of a growing
          community of cake lovers and entrepreneurs, and we look forward to
          helping you achieve your goals. Our cakes, cupcakes, and other treats
          are baked fresh daily, using only the finest ingredients. Joining our
          franchise means joining a family of like-minded individuals who are
          dedicated to bringing joy to every customer's taste buds. So what are
          you waiting for? Come be a part of the SS Bakers family and share the
          sweetness with the world! Please contact us for more information on
          how to become a franchisee of SS Bakers.
        </p>
      </div>
          <div className="franchise-contactform">
              <h4 className="franchise-contactform-title">Contact Form</h4>
              <form>
                  <input placeholder="Name*" type="text" />
                  <input placeholder="Age*" type="text" />
                  <input placeholder="Current Occupation" type="text" />
                  <input placeholder="Mobile" type="text" />
                  <input type="text" placeholder="Residence" />
                  <button>Send</button>
              </form>
          </div>
    </section>
  );
}
