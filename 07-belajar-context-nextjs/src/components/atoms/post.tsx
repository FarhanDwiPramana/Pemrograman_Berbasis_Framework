import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body }: { title: string; body: string }) {
  return (
    <Section2 isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <h1>FARHAN DWI PRAMANA</h1>
        <h1>2141720125</h1>
        <i>{body}</i>
      </p>
    </Section2>
  );
}
