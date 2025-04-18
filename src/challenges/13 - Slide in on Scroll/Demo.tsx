import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import "./style.css";
import { useEffect, useRef } from "react";

const debounce = (callback: () => void, delay = 20) => {
  let timeId: undefined | number;
  return () => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      callback();
    }, delay);
  };
};

const Demo = () => {
  const { challengeId } = useParams();
  const imgRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.screenY;
      const windowHeight = window.innerHeight;

      imgRef.current.forEach((img) => {
        const rect = img?.getBoundingClientRect();
        if (rect) {
          const elementMid = scrollY + rect.top + rect.height / 2;
          if (elementMid >= scrollY && elementMid <= scrollY + windowHeight) {
            img?.classList.add("active");
          } else {
            img?.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", debounce(handleScroll));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mx-auto my-28 max-w-3xl p-10 text-justify text-lg">
        <h1 className="my-6 text-6xl font-bold">Slide in on Scroll</h1>
        <p>
          Consectetur adipisicing elit. Tempore tempora rerum, est autem
          cupiditate, corporis a qui libero ipsum delectus quidem dolor at
          nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
          quod quas laborum nam! Fuga ad tempora in aspernatur pariaturlores
          sunt esse magni, ut, dignissimos.
        </p>
        <p>
          Lorem ipsum cupiditate, corporis a qui libero ipsum delectus quidem
          dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis
          blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur
          pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
        </p>
        <p>Adipisicing elit. Tempore tempora rerum..</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          tempora rerum, est autem cupiditate, corporis a qui libero ipsum
          delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
          asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
          aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
          dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          tempora rerum, est autem cupiditate, corporis a qui libero ipsum
          delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
          asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
          aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
          dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          tempora rerum, est autem cupiditate, corporis a qui libero ipsum
          delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
          asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
          aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
          dignissimos.
        </p>

        <img
          src="http://unsplash.it/400/400"
          className="align-left slide-in"
          ref={(element) => {
            imgRef.current[0] = element;
          }}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          deserunt facilis et iste corrupti omnis tenetur est. Iste ut est dicta
          dolor itaque adipisci, dolorum minima, veritatis earum provident error
          molestias. Ratione magni illo sint vel velit ut excepturi consectetur
          suscipit, earum modi accusamus voluptatem nostrum, praesentium
          numquam, reiciendis voluptas sit id quisquam. Consequatur in quis
          reprehenderit modi perspiciatis necessitatibus saepe, quidem, suscipit
          iure natus dignissimos ipsam, eligendi deleniti accusantium, rerum
          quibusdam fugit perferendis et optio recusandae sed ratione. Culpa,
          dolorum reprehenderit harum ab voluptas fuga, nisi eligendi natus
          maiores illum quas quos et aperiam aut doloremque optio maxime fugiat
          doloribus. Eum dolorum expedita quam, nesciunt
        </p>

        <img
          src="http://unsplash.it/400/401"
          className="align-right slide-in"
          ref={(element) => {
            imgRef.current[1] = element;
          }}
        />

        <p>
          {" "}
          at provident praesentium atque quas rerum optio dignissimos
          repudiandae ullam illum quibusdam. Vel ad error quibusdam, illo ex
          totam placeat. Quos excepturi fuga, molestiae ea quisquam minus,
          ratione dicta consectetur officia omnis, doloribus voluptatibus?
          Veniam ipsum veritatis architecto, provident quas consequatur
          doloremque quam quidem earum expedita, ad delectus voluptatum, omnis
          praesentium nostrum qui aspernatur ea eaque adipisci et cumque ab? Ea
          voluptatum dolore itaque odio. Eius minima distinctio harum, officia
          ab nihil exercitationem. Tempora rem nemo nam temporibus molestias
          facilis minus ipsam quam doloribus consequatur debitis nesciunt
          tempore officiis aperiam quisquam, molestiae voluptates cum, fuga
          culpa. Distinctio accusamus quibusdam, tempore perspiciatis dolorum
          optio facere consequatur quidem ullam beatae architecto, ipsam sequi
          officiis dignissimos amet impedit natus necessitatibus tenetur
          repellendus dolor rem! Dicta dolorem, iure, facilis illo ex nihil ipsa
          amet officia, optio temporibus eum autem odit repellendus nisi.
          Possimus modi, corrupti error debitis doloribus dicta libero earum,
          sequi porro ut excepturi nostrum ea voluptatem nihil culpa? Ullam
          expedita eligendi obcaecati reiciendis velit provident omnis quas qui
          in corrupti est dolore facere ad hic, animi soluta assumenda
          consequuntur reprehenderit! Voluptate dolor nihil veniam laborum
          voluptas nisi pariatur sed optio accusantium quam consectetur,
          corrupti, sequi et consequuntur, excepturi doloremque. Tempore quis
          velit corporis neque fugit non sequi eaque rem hic. Facere, inventore,
          aspernatur. Accusantium modi atque, asperiores qui nobis soluta cumque
          suscipit excepturi possimus doloremque odit saepe perferendis
          temporibus molestiae nostrum voluptatum quis id sint quidem nesciunt
          culpa. Rerum labore dolor beatae blanditiis praesentium explicabo
          velit optio esse aperiam similique, voluptatem cum, maiores ipsa
          tempore. Reiciendis sed culpa atque inventore, nam ullam enim expedita
          consectetur id velit iusto alias vitae explicabo nemo neque odio
          reprehenderit soluta sint eaque. Aperiam, qui ut tenetur, voluptate
          doloremque officiis dicta quaerat voluptatem rerum natus magni. Eum
          amet autem dolor ullam.
        </p>

        <img
          src="http://unsplash.it/200/500"
          className="align-left slide-in"
          ref={(element) => {
            imgRef.current[2] = element;
          }}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet{" "}
          <img
            src="http://unsplash.it/200/200"
            className="align-right slide-in"
            ref={(element) => {
              imgRef.current[3] = element;
            }}
          />{" "}
          temporibus doloremque possimus facilis. Possimus labore, officia
          dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis
        </p>

        <p>
          laborum neque repudiandae quam, cumque, voluptate veritatis itaque,
          placeat veniam ad nisi. Expedita, laborum reprehenderit ratione soluta
          velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore
          culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab
          ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi
          tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
          obcaecati officiis quo, ratione eveniet, provident pariatur. Veniam
          quasi expedita distinctio, itaque molestiae sequi, dolorum nisi
          repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos
          autem nihil, perspiciatis expedita enim tempore, alias ab maiores quis
          necessitatibus distinctio molestias eum, quidem. Delectus impedit
          quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio
          nihil? Veniam amet reiciendis blanditiis quis reprehenderit
          repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam.
          Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit,
          ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis
          neque.
        </p>

        <img
          src="http://unsplash.it/400/400"
          className="align-right slide-in"
          ref={(element) => {
            imgRef.current[4] = element;
          }}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore
          culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab
          ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi
          tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
          obcaecati officiis quo, ratione eveniet, provident pariatur. Veniam
          quasi expedita distinctio, itaque molestiae sequi, dolorum nisi
          repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos
          autem nihil, perspiciatis expedita enim tempore, alias ab maiores quis
          necessitatibus distinctio molestias eum, quidem. Delectus impedit
          quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio
          nihil? Veniam amet reiciendis blanditiis quis reprehenderit
          repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam.
          Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit,
          ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis
          neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore
          culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab
          ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi
          tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
          obcaecati officiis quo, ratione eveniet, provident pariatur. Veniam
          quasi expedita distinctio, itaque molestiae sequi, dolorum nisi
          repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos
          autem nihil, perspiciatis expedita enim tempore, alias ab maiores quis
          necessitatibus distinctio molestias eum, quidem. Delectus impedit
          quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio
          nihil? Veniam amet reiciendis blanditiis quis reprehenderit
          repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam.
          Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit,
          ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis
          neque.
        </p>
      </div>
      <DemoNoteButtons challengeId={challengeId || "13"} buttonName="Note" />
    </>
  );
};

export default Demo;
