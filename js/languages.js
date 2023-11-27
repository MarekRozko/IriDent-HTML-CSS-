

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
            "hero.title": "Stomatologia Gabinet",
            "hero.subtitle": "Odwiedź naszą nowoczesną stomatologię i ciesz się pięknym uśmiechem każdego dnia!",
            "hero.button": "Umów wizytę",
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
            "hero.title": "Стоматологічний кабінет",
            "hero.subtitle": "Завітайте до нашої сучасної стоматології та насолоджуйтесь гарною посмішкою щодня!",
            "hero.button": "Запишіться на прийом",
            
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



