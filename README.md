# @janossik/date

Ten pakiet jest zbiorem funkcji, które mają ułatwić korzystanie z dat.

### Funkcje:

#### getNameMonth = (index: number, lang: "en" | "de" | "pl" ) => string

    parametry:
    - index: wybierasz, który miesiąc ma być zwrócony(index musi być pomiędzy 0 a 11, np. 0 = "sty");
    - lang: ustawiasz język

Zwraca nazwę miesiąca (w podanym języku w lang, domyślnie "en")

#### getNameShortMonth = (index: number, lang: "en" | "de" | "pl" ) => string

    parametry:
    - index: wybierasz, który miesiąc ma być zwrócony(index musi być pomiędzy 0 a 11, np. 0 = "sty");
    - lang: ustawiasz język

Zwraca skróconą nazwę miesiąca (w podanym języku w lang, domyślnie "en")

#### getNameDay = (index: number, lang: "en" | "de" | "pl" ) => string

    parametry:
    - index: wybierasz, który miesiąc ma być zwrócony(index musi być pomiędzy 0 a 11, np. 0 = "sty");
    - lang: ustawiasz język

Zwraca nazwę dnia tygodnia (w podanym języku w lang, domyślnie "en")

#### getShortNameDay = (index: number, lang: "en" | "de" | "pl" ) => string

    parametry:
    - index: wybierasz, który miesiąc ma być zwrócony(index musi być pomiędzy 0 a 11, np. 0 = "sty");
    - lang: ustawiasz język

Zwraca skróconą nazwę dnia tygodnia (w podanym języku w lang, domyślnie "en")

#### getDate = (year: number, month: number, day: number) => Date

    parametry:
    - year: ustawiasz rok;
    - month: ustawiasz mesiąc
    - day: ustawiasz dzień

Zwraca ustawioną Date lub aktualną Date

#### getMonthDays= (year: number, month: number, day: number, lang: "en" | "de" | "pl") => { name: string; days: { id: string; day: number; visible: boolean }[ ] }

    parametry:
    - year: ustawiasz rok;
    - month: ustawiasz mesiąc
    - day: ustawiasz dzień
    - lang: ustawiasz język

Zwraca obiekt z nazwą miesiąca oraz z tablicą dni, przygotowaną pod kalendarz

#### addLeadingZero = (number: number) => string

    parametry:
    - number:  Liczba

Zwraca liczbę pojedynczą z wiodącym zerem, liczby dziesiętne przekształca tylko na string

#### printDate = (format: string, date: Date , lang: "en" | "de" | "pl") => string

    parametry:
    - format:  string (np. "ddmmyyyy")
    	day :
    		- "" : "6."
    		- "dd" : "06."
    		- "ddd" : "pon, 06."
    		- "dddd" : "poniedziałek, 06."
    	month :
    		- "" : "3."
    		- "dd" : "03."
    		- "ddd" : "mar"
    		- "dddd" : "marzec"
    	rok :
    		- "" : "21"
    		- "yyyy" : "2021"
    - date: Możesz podać date
    - lang: ustawiasz język

Zwraca datę w podanym formacie
