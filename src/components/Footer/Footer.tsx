import { FC } from 'react';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { FooterBackgroundColor, FooterContainer } from './Footer.styled';
import { Section } from '../UI/Section/Section.styled';

const Footer: FC = () => {
  return (
    <FooterBackgroundColor>
      <Container>
        <Section>
          <FooterContainer>
            <section>
              <h3>Связаться с нами:</h3>
              <ul>
                <li>
                  Email: <a href="mailto:info@carshowroom.com">info@carshowroom.com</a>
                </li>
                <li>
                  Телефон: <a href="tel:+380480000000">+380 (48) 000-00-00</a>
                </li>
                <li>
                  Адрес:
                  <address>
                    <a href="https://www.google.com/maps?q=46.4825,30.7233" target="_blank">
                      ул. Автосалонная, 24, Одесса, Украина
                    </a>
                  </address>
                </li>
              </ul>
            </section>

            <section>
              <h3>Следите за нами в социальных сетях:</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </section>

            <div>
              <p>&copy; 2024 Автосалон</p>
              <p>Виртуальный автосалон — ваш проводник в мире автомобилей!</p>
            </div>
          </FooterContainer>
        </Section>
      </Container>
    </FooterBackgroundColor>
  );
};

export default Footer;
