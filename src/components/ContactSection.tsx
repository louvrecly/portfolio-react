import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';
import Card from './Card';
import Link from './Link';
import { Contact } from '../data/contacts';

interface ContactSectionProps {
  contacts?: Contact[];
}

const ContactSection = ({ contacts = [] }: ContactSectionProps) => {
  return (
    <Section id="contact" title="Contact">
      <Card>
        <div className="u-py-3 u-px-5">
          {contacts.map((contact) => (
            <div key={contact.key} className="u-mb-3 last:u-mb-0">
              <label className="u-text-l sm:u-text-xl">
                {contact.icon ? (
                  <FontAwesomeIcon
                    className="u-mr-3"
                    icon={contact.icon}
                  ></FontAwesomeIcon>
                ) : (
                  contact.title
                )}
                <Link href={contact.link} target="_blank">
                  {contact.value}
                </Link>
              </label>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default ContactSection;
