# Movie Database Viewer 

Målet med sidan var att utveckla mina kunskaper inom javascript och API samt testa tidigare kunskaper inom HTML och CSS. Jag har lagt cirka 25 timmar på skapelsen av hemsidan. Strukturen på sidan innehåller en navbar längst upp, en informationsruta i mitten, ett fält med de 10 olika filmerna under det och en footing längst ner. Headern består av loggan, tre knappar och en sökruta. Informationsrutan innhehåller filmernas namn, bild, trailer, ratign och description. Footern består av 5 olika ikoner för sociala medier och en copyright label.

## Kravspecifikation
* **Funktionella Krav**
    * Hemsidan ska kunna spela upp trailers
    * Hemsidan ska kunna visa filmers betyg
    * Hemsidan ska kunna ha en random movie button

* **Icke-funktionella krav**
    * Användarvänlighet
        * Dark Mode funktion
        * Responsiv UI
        * Om det finns tid, Mobilanpassad
    * Underhållbarhet
        * Uppdateras automatiskt med filmer från API
    * Tillgänglighet
        * Tillgänglig för alla gratis
        * Beskrivande text i Alt
        * Om det finns tid, Språkinställningar


Jag började med att designa en grund för hemsidan och använde en color randomizer på [color-hex.com](https://www.color-hex.com/) för att välja färgtemat på sidan. Stilmässigt så valde jag att designa hemsidan simplistiskt med rundade hörn och ett matt färgtema. För att göra animerade cards som visar information så använde jag css attributet transition vilket jag har blivit mer bekant med under projektets utveckling. 

För att göra animerade cards som visar information så använde jag css attributet transition vilket jag har blivit mer bekant med under projektets utveckling. 

Ett problem jag uppstod med var att hitta och få en API att använda. Jag gick igenom en stor mängd API’s som krävde personlig informationsuppgifter som adress och kortnummer. Jag valde att undvika dessa API’s och hittade till slut Movieglu vilket blev API’n jag använde. 

För att hämta API’n så använde jag en get funktion med Jquery och genererade ut all data i korten med hjälp av en forEach loop. Korten skapades  i loopen där jag använde mig av append attribut för att skapa en DOM hierarki. 

När man klickar på de olika korten så ska informationen längst upp matcha filmen som man klickade på. Denna funktion skapade jag genom att ge korten ett onclick attribut som hämtar det unika ID som varje film har och kallar på en funktion funk().   
Sedan hämtar den all information från endast filmen som man klickade på.

![mainpage](images/Screenshot%202022-10-03%20at%2011.43.07.png)

Dark-mode gjorde jag genom en toggle funktion som ändrar objektets klass till en klass med dark-mode css som ändrar background color och text color. Jag gjorde även en carousel slideshow som man skulle se på main-sidan men tog sedan bort den för att visa filmdata som namn, beskrivning, bild och trailer.

Jag lyckades inte att skapa en knapp för språkbyte på grund av att jag fastnade på API delen för länge och inte hade tid att skapa knappen innan deadlinen. Sökrutan blev också inte av på grund av att API’n som jag använde endast hade 10 filmer. Jag tyckte då att det inte skulle vara nödvändigt för användaren att använda en sökruta där alla filmer redan finns på skärmen. Randomized button blev även scrapped på grund av samma anledning, både tidsbegränsningar och ett för litet antal filmer för att kunna göra funktionen användbar.  

Sidan kunde inte visa filmernas betyg då API’n som jag använde inte hade data för det området. Eftersom att jag hade stylat sidan för att kunna visa score så valde jag att ersätta betygen med åldersgräns. Detta var inte optimalt men jag tror att det kan hjälpa besökare att få en bild av filmens innehåll och målgrupp vilket är syftet med sidan.

Jag är relativt nöjd med slutprodukten men hade önskat att jag inte skulle behöva eliminera en del funktioner. Genom detta projekt har jag förbättrat mina färdigheter i javascript och Jquery, lärt mig mer om hur en API fungerar och skapat mer interaktiv css design genom transition, hover, och animations. Det finns definitivt saker att förbättra och funktiner att lägga till för en förbättrad användrarupplevelse. 

Saker att förbättra tills nästa gång är att hitta en bra API med mycket information tidigt så att det inte tar flera dagar att få en nyckel. Mycket av CSS skulle även kunna bli bättre och mer användarvänlig. Hemsidan blev mycket simpel och jag hoppas att jag kan skapa något mer avancerat i framtiden.
