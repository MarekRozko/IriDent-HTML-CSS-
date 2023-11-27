

document.addEventListener('DOMContentLoaded', function() {
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'pl',
      debug: false,
      resources: {
        pl: {
          translation: {
            "menu.gabinet": "Gabinet",
            "menu.services": "Usługi",
            "menu.preventiveDentistry": "Profilaktyka Stomatologiczna",
            "menu.generalDentistry": "Stomatologia ogólna",
            "menu.prosthodontics": "Protetyka",
            "menu.aestheticDentistry": "Stomatologia Estetyczna",
            "menu.endodontics": "Endodoncja",
            "menu.dentalSurgery": "Chirurgia Stomatologiczna",
            "menu.orthodontics": "Ortodoncja",
            "menu.dentalImplants": "Implanty Zębów",
            "menu.teethWhitening": "Wybielanie",
            "menu.pediatricDentistry": "Stomatologia Dziecięca",
            "menu.dentalRadiology": "Pracownia RTG",
            "menu.team": "Zespół",
            "menu.pricelist": "Cennik",
            "menu.contact": "Kontakt",
            "p.call": "Zamów wizyte u nas.Zadzwoń do nas"
            
          }
        },
        uk: {
          translation: {
            "menu.gabinet": "Кабінет",
            "menu.services": "Послуги",
            "menu.preventiveDentistry": "Профілактика Стоматологічна",
            "menu.generalDentistry": "Стоматологія загальна",
            "menu.prosthodontics": "Протезування",
            "menu.aestheticDentistry": "Стоматологія Естетична",
            "menu.endodontics": "Ендодонтія",
            "menu.dentalSurgery": "Хірургія Стоматологічна",
            "menu.orthodontics": "Ортодонтія",
            "menu.dentalImplants": "Імплантація Зубів",
            "menu.teethWhitening": "Відбілювання",
            "menu.pediatricDentistry": "Стоматологія Дитяча",
            "menu.dentalRadiology": "Лабораторія Рентгенівська",
            "menu.team": "Команда",
            "menu.pricelist": "Ціни",
            "menu.contact": "Контакти",
            "p.call": "Замовте візит до нас. Зателефонуйте нам",
            
          }
        },
      }
    }, function(err, t) {
      updateContent();
    });
});

function updateContent() {
  document.querySelectorAll('.lang').forEach(function(link) {
    link.textContent = i18next.t('' + link.getAttribute('data-i18n'));
  });
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang, function(err, t) {
    updateContent();
  });
}



