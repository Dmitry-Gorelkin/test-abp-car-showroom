import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import { Section } from '../components/UI/Section/Section.styled';

const AboutUs = () => {
  return (
    <Container>
      <Section>
        <h2>About Us</h2>

        <Section>
          <h3>Our Mission</h3>
          <p>
            At <span>Car Showroom</span>, we strive to provide our customers with the best selection
            of cars and high-quality service. Our goal is to make the car-buying process simple and
            enjoyable for everyone.
          </p>
        </Section>
        <Section>
          <h3>Our Story</h3>
          <p>
            Founded in <span>2024</span>, our company began its journey as a small showroom and has
            since expanded significantly. We are proud to be one of the leading car dealerships in
            <span>Odessa</span>, offering a wide range of new and pre-owned vehicles from reliable
            manufacturers.
          </p>
        </Section>
        <Section>
          <h3>Our Team</h3>
          <p>
            We are a team of professionals who are passionately dedicated to our work. Our sales
            managers and customer service specialists have extensive experience and are always ready
            to help you make the right choice.
          </p>
        </Section>
        <Section>
          <h3>Our Philosophy</h3>
          <p>
            We believe in honesty and transparency in business. Our goal is not just to sell a car,
            but to build long-lasting relationships with our customers. We value your trust and
            strive to meet your expectations.
          </p>
        </Section>
      </Section>
    </Container>
  );
};

export default AboutUs;
