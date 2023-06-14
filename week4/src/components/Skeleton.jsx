import "./Skeleton.css";
import styled from "styled-components";

const Skeleton = () => {
  return (
    <Section>
      <Article className="skeleton-item">
        <header>
          <div />
        </header>
        <div>
          <div className="skeleton-img" />
        </div>
        <div className="skeleton-weather">
          <div>
            <span className="detail-weather" />
            <p className="weather" />
          </div>
        </div>
      </Article>
    </Section>
  );
};
export default Skeleton;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 50rem;

  padding: 0.5rem;
`;

const Article = styled.article`
  width: 10rem;
  height: 20rem;
  margin: 3rem;
`;
