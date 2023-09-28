import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="project_container">
      <div className="project-image"></div>
      <section className="project-head">
        <div className="project-desc">
          <h1 className="project-header">Our Projects</h1>
          <p className="project-desc">
            Explore our projects page to witness the results of our passion for
            construction excellence.
          </p>
        </div>
      </section>

      {/* 1st PROJECT - VAAL DE GRACE */}
      <div className="firstProject">
        <div className="projectDetails">
          <h1>VAAL DE GRACE, PARYS</h1>
          <h2>Expanding residence</h2>
          <p>
            At Vaal de Grace Golf Course, we swiftly expanded the largest
            existing house byadding a double story to the pre-existing ground
            floor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            dignissimos, inventore ipsum rem, doloribus dolor cupiditate porro
            temporibus perspiciatis illo, magnam amet tenetur eius sint
            consequatur. Perferendis eaque tenetur fuga. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eum libero repudiandae temporibus
            ut ipsa pariatur nesciunt fugiat, id omnis commodi, iusto quam
            dolorem maxime unde tempora! Nisi voluptates quos numquam. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Minus sit
            obcaecati eligendi architecto pariatur sequi porro natus nesciunt
            consectetur possimus magni odit dolorum, voluptate aut dolore quas
            deleniti tenetur dolorem!
            <br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae, autem ad eum blanditiis nesciunt, in temporibus provident, ipsa laudantium repudiandae. Dignissimos magni eligendi harum distinctio vero autem, earum tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed labore, id eius et voluptates rem placeat at, facilis velit totam deserunt, quibusdam incidunt vitae atque vel tenetur similique temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis repudiandae maiores veritatis ad fuga aspernatur iusto rerum dolore recusandae illo! Dicta, quos minima aut fuga corporis suscipit aliquid totam quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora tempore eligendi dolores ipsam quisquam pariatur debitis expedita soluta, adipisci aperiam quae ducimus voluptate laudantium dolore nostrum, iste nam placeat deserunt?
          </p>
        </div>
        <div className="projectLibrary">
        <Image
            src="/assets/about.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/building.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/project1.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/project1b.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />

        </div>
      </div>

          {/* 2nd PROJECT - Hadeda Creek*/}
          <div className="firstProject">
          <div className="projectLibrary">
        <Image
            src="/assets/concrete.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/building-2.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/concrete-1.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />
          <Image
            src="/assets/project1b.jpg"
            alt="Lantana Project"
            width={200}
            height={400}
            className="project-img"
          />

        </div>
        <div className="projectDetails">
          <h1>HADEDA CREEK BUSHCAMPE, FREE STATE</h1>
          <h2>Concrete Flooring</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat atque optio illo minima voluptatem deleniti! Id tempore quae debitis vero, cupiditate neque eos fuga, suscipit deleniti tenetur molestias explicabo exercitationem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde voluptatem autem quos consequatur rerum error ipsa animi non earum a quo provident maiores tenetur, dolorem ipsum, sapiente libero distinctio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus omnis non maiores consequuntur nam, laudantium in magnam accusantium qui nesciunt sit quibusdam inventore ut minus est. Odio, possimus voluptas.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ut reprehenderit esse velit. Molestiae sequi tenetur nobis placeat saepe in maiores dolore quia mollitia! Odio, consectetur. Alias commodi error vel!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id pariatur quaerat iusto hic accusamus fugiat doloremque tenetur dignissimos eligendi cum, consequuntur neque distinctio explicabo perferendis incidunt obcaecati expedita non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita illum accusantium sunt veniam, sapiente ea! Sit aliquam maiores exercitationem modi non minus, numquam, et quis, odio soluta nesciunt ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum commodi tempore? Distinctio totam modi facilis quia neque delectus accusamus, minima hic magnam, voluptatem ex quo dolor molestiae vero quod?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio optio nam maxime pariatur assumenda voluptas? Veniam illo inventore modi provident cumque, autem illum eum, qui, fugit voluptatibus impedit incidunt esse.

          </p>
        </div>
  
      </div>

      {/* CONTACT BUTTON */}
      <div className="contact-container">
        <p className="contact">
        Looking for a partner in your next construction project?.
        </p>
        <Link href="/contact">
          <button className="contact-btn">Enquire</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
