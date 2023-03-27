import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((evt) => (
      <Link className="card" key={evt.id} href={`/events/${evt.id}`}>
        <div className="image">
          <Image width={450} height={300} alt={evt.title} src={evt.image} />
        </div>
        <div className="content">
          <h2>{evt.title}</h2>
          <p>{evt.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
