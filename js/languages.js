

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
            "about.subtitle1": "Jesteśmy zespołem doświadczonych specjalistów, dla których zdrowie i piękny uśmiech pacjentów są najważniejsze.",
            "about.title": "Kim jesteśmy",
            "about.subtitle2": "Nasi lekarze stale podnoszą swoje kwalifikacje, aby zapewnić Ci kompleksową opiekę na najwyższym poziomie.",
            "about.subtitle3": "Z nami możesz czuć się pewnie i komfortowo podczas każdej wizyty.",
            "resulat.row1": "Zadowolonych pacjentów",
            "resulat.row2": "Wykonanych zabiegów",
            "resulat.row3": " Lat doświadczenia",
            "mission.title": "Nasza Misja",
            "mission.text1": "Naszym celem jest zapewnienie kompleksowej opieki stomatologicznej na najwyższym poziomie, przy zachowaniu przyjaznej atmosfery i komfortu pacjenta.",
            "mission.text2": "Dążymy do ciągłego rozwoju i wprowadzania innowacyjnych rozwiązań, aby sprostać oczekiwaniom naszych pacjentów.",
            "mission.text3": "Zapewniamy profesjonalizm, troskę o zdrowie oraz piękny i zdrowy uśmiech.",

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
            "about.subtitle1": "Ми - команда досвідчених фахівців, для яких здоров'я та красива посмішка пацієнтів є найважливішим.",
            "about.title": "Хто ми",
            "about.subtitle2": "Наші лікарі постійно підвищують свою кваліфікацію, щоб надати Вам комплексну допомогу на найвищому рівні.",
            "about.subtitle3": "З нами Ви почуватиметеся впевнено та комфортно під час кожного візиту.",
            "resulat.row1": "Задоволені пацієнти",
            "resulat.row2": "Виконані процедури",
            "resulat.row3": "Років досвіду",
            "mission.title": "Наша місія",
            "mission.text1": "Наша мета – надати комплексну стоматологічну допомогу на найвищому рівні, зберігаючи доброзичливу атмосферу та комфорт пацієнта.",
            "mission.text2": "Ми прагнемо до постійного розвитку та впровадження інноваційних рішень, щоб відповідати очікуванням наших пацієнтів.",
            "mission.text3": "Ми забезпечуємо професіоналізм, турботу про здоров'я та красиву та здорову усмішку.",
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



