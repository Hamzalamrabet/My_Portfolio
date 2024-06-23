const translations = {
    en: {
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    english: "English",
    germany: "German",
    a: "Hello and Welcome. this is",
    b: "My Portfolio",
    c: "You can check it.",
    d: "view my work",
    e: "technical Skills",
    f: "Python",
    g: "Numpy, Pandas, Matplotlib, Web Scraping.",
    i: "Excel",
    k: "Data Cleaning & Visualization.",
    l: "Power BI",
    l1: "SQL",
    m: "Power Query, DAX & Data Visualization.",
    m1: "Data Exploration & Cleaning.",
    n: "Projects",
    n1: "The objective of this analysis is to identify the most suitable laptop brand by considering both its price point and customer reviews.",
    n2:"This survey aims to analyze bike preferences, enabling us to target optimal customer segments for enhanced sales opportunities in the bike market.",
    n4: "In this project, our objective is to assess the impact on major work sectors in Germany, focusing on companies and their respective profits as key indicators.",
    o: "More details",
    p:"Bike Sales.",
    p1: "Laptop Products.",
    r: "Companies in Germany.",
    s: "Contact",
    t: "Phone"



    },
    de: {
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
        english: "Englisch",
        germany: "Deutsch",
        a: " Hallo und Wilkommen. Das ist",
        b: "Mein Portfolio",
        c:"Sie könnten es sehen.",
        d:"sehen Sie meine Arbeit an",
        e: "Technische Fähigkeiten",
        f: "Python",
        g: "Numpy, Pandas, Matplotlib, Web Scraping.",
        i:"Excel",
        k:"Datenbereinigung & -visualisierung.",
        l: "Power BI",
        l1: "SQL",
        m: "Power Query, DAX & Datenvisualisierung.",
        m1: "Datenexploration & -bereinigung",
        n: "Projekte",
        n1: "Das Ziel dieser Analyse besteht darin, die am besten geeignete Laptop-Marke zu ermitteln, indem sowohl der Preis als auch die Kundenbewertungen berücksichtigt werden.",
        n2: "Ziel dieser Umfrage ist es, die Vorlieben für Fahrräder zu analysieren, damit wir die optimalen Kundensegmente ansprechen können, um die Absatzmöglichkeiten auf dem Fahrradmarkt zu verbessern.",
        n4:"In diesem Projekt wollen wir die Auswirkungen auf die wichtigsten Arbeitssektoren in Deutschland bewerten, wobei wir uns auf die Unternehmen und ihre jeweiligen Gewinne als Schlüsselindikatoren konzentrieren.",
        o: "Mehr Details",
        p: "Fahrradverkauf.",
        p1: "Laptop-Produkte.",
        r: "Unternehmen in Deutschland.",
        s: "Kontakt",
        t:"Telefon"

        }

};
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event)=> {
    setlanguage(event.target.value);
    localStorage.setItem("lang" , event.target.value);
});
document.addEventListener("DOMContentLoaded", ()=> {
    const language = localStorage.getItem("lang");
    setlanguage(language);
});
const setlanguage = (language) => {
    const elements = document.querySelectorAll ("[data-i18n]");
    elements.forEach((element) => {
        const translationkey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationkey]

    });
};

