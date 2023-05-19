import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import './candidateCv.css';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { ListConversationCandidates } from '../listConversation/ListConversation';

export const CandidateCv = () => {
  return (
    <div className="container-of-two">
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button type="button" className="button-come-back">
            <ArrowBackIosIcon />
            Wróć
          </button>
        </Link>
      </div>
      <div className="container-of-profile">
        <div className="user-git-photo">
          <img
            src={ListConversationCandidates[0].img}
            alt="candidate"
            className="profile-cv-picture"
          />
          <h1 className="candidate-profile-cv">
            {ListConversationCandidates[0].name}
          </h1>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="user-link"
          >
            <GitHubIcon color="primary" />
            michalkaszubagit
          </a>
        </div>
        <div className="contact-info-user">
          <p className="phone-section">
            <PhoneIcon fontSize="small" style={{ color: '#4D4D4D' }} /> +48 566
            072 227
          </p>
          <p className="mail-reference">
            <MailIcon fontSize="small" style={{ color: '#4D4D4D' }} />
            <a
              href="mailto:example@example.com"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              michalkaszuba@gmail.com
            </a>
          </p>
          <div className="description-of-candidate" />
          <span className="about-me">O mnie</span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
        </div>
        <div className="buttons-candidateCv">
          <button type="button" className="button-candidateCv">
            Brak zainteresowania
          </button>
          <button type="button" className="button-candidateCv">
            Zatrudniony
          </button>
        </div>
      </div>

      <div className="container-of-user-cv-info">
        <div className="small-container-of-user-grades-info">
          <h1 className="headers-of-small-container">Oceny</h1>
          <div className="container-of-grades">
            <div className="small-container-of-grades">
              <p className="paragraph-small-container-of-grades">
                Ocena przejścia kursu
              </p>
              <br />
              <div className="grades-first">
                <span className="grade-bolder ">5 </span>
                <span className="grade"> /5</span>
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
              </div>
            </div>
            <div className="small-container-of-grades">
              <p className="paragraph-small-container-of-grades">
                Ocena aktywności i <br />
                zaangażowania na kursie
              </p>
              <div className="grades">
                <span className="grade-bolder ">3 </span>
                <span className="grade"> /5</span>
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarBorderIcon fontSize="small" sx={{ color: red[500] }} />
                <StarBorderIcon fontSize="small" sx={{ color: red[500] }} />
              </div>
            </div>
            <div className="small-container-of-grades">
              <p className="paragraph-small-container-of-grades">
                Ocena kodu w projekcie <br />
                własnym
              </p>
              <div className="grades">
                <span className="grade-bolder ">4 </span>
                <span className="grade"> /5</span>
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarBorderIcon fontSize="small" sx={{ color: red[500] }} />
              </div>
            </div>
            <div className="small-container-of-grades">
              <p className="paragraph-small-container-of-grades">
                Ocena pracy w zespole w <br />
                Scrum
              </p>
              <div className="grades">
                <span className="grade-bolder ">5 </span>
                <span className="grade"> /5</span>
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
                <StarIcon fontSize="small" sx={{ color: red[500] }} />
              </div>
            </div>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">
            Oczekiwanie w stosunku do zatrudnienia
          </h1>
          <div className="container-of-requirements">
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2">
                <p className="paragraph-small-container-of-requirements">
                  Preferowane miejsce pracy
                </p>
                <span className="span-requirements">Biuro</span>
              </div>
            </div>
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2">
                <p className="paragraph-small-container-of-requirements">
                  Docelowe miasto, gdzie chce pracować kandydat
                </p>
                <span className="span-requirements">Warszawa</span>
              </div>
            </div>
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2">
                <p className="paragraph-small-container-of-requirements">
                  Oczekiwany typ kontraktu
                </p>
                <span className="span-requirements">Umowa o pracę</span>
              </div>
            </div>
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2">
                <p className="paragraph-small-container-of-requirements">
                  Oczekiwane wynagrodzenie miesięczne netto
                </p>
                <span className="span-requirements">8 000 zł</span>
              </div>
            </div>
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2">
                <p className="paragraph-small-container-of-requirements">
                  Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                </p>
                <span className="span-requirements">TAK</span>
              </div>
            </div>
            <div className="small-container-of-requirements">
              <div className="small-container-of-requirements-v2-last">
                <p className="paragraph-small-container-of-requirements">
                  Komercyjne doświadczenie w programowaniu
                </p>
                <span className="span-requirements">6 miesięcy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">Edukacja</h1>
          <div className="text-space-for-small-containers">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">Kursy</h1>
          <div className="text-space-for-small-containers">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">Doświadczenie zawodowe</h1>
          <div className="text-space-for-small-containers">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">Portfolio</h1>
          <div>
            <a
              className="text-space-for-small-containers-link"
              href="https://github.com/PaulaaGS?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <AttachFileIcon />
              <p>https://github.com/PaulaaGS/HeadHunter-backend</p>
            </a>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">
            Projekt w zespole Scrumowym
          </h1>
          <div className="container-link">
            <a
              className="text-space-for-small-containers-links"
              href="https://github.com/PaulaaGS/HeadHunter-backend"
              target="_blank"
              rel="noreferrer"
            >
              <AttachFileIcon />
              <p>https://github.com/PaulaaGS/HeadHunter-backend</p>
            </a>
            <a
              className="text-space-for-small-containers-links"
              href="https://github.com/kowalskika/HeadHunter-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <AttachFileIcon />
              <p>https://github.com/kowalskika/HeadHunter-frontend</p>
            </a>
          </div>
        </div>
        <div className="small-container-of-user-cv-info">
          <h1 className="headers-of-small-container">Projekt na zaliczenie</h1>
          <div className="container-link">
            <a
              className="text-space-for-small-containers-links"
              href="https://Loremipsum/dolor/sit/amet"
              target="_blank"
              rel="noreferrer"
            >
              <AttachFileIcon />
              <p>https://Loremipsum/dolor/sit/amet</p>
            </a>
            <a
              className="text-space-for-small-containers-links"
              href="https://Loremipsum/dolor/sit/amet"
              target="_blank"
              rel="noreferrer"
            >
              <AttachFileIcon />
              <p>https://Loremipsum/dolor/sit/amet</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
