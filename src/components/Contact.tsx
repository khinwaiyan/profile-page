import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactItem } from '../styles/header.styled';

export const Contact = () => {
  return (
    <>
      <ContactItem href="mailto:khinwaiyan@snu.ac.kr" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </ContactItem>
      <ContactItem
        href="https://github.com/khinwaiyan"
        target="_blank"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </ContactItem>
      <ContactItem href="https://www.instagram.com/khin_waiyan" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </ContactItem>{' '}
    </>
  );
};
