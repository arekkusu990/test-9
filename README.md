# Consegna

La richiesta è quella di mostrare l'elenco libri restituito dall'endpoint:
```GET https://my-json-server.typicode.com/MaieuticalLabs/booklists/books```
e permettere all'utente di filtrarli per titolo (`title`) o per autore (`author`).

Se l'input del filtro (`#filterForm`) è attivo, mostro solo i risultati che soddisfano la condizione `title OR author`; altrimenti mostro tutti i libri disponibili.
Il pulsante "annulla" permette di resettare la ricerca in corso.

La consegna consiste nel fare una pull request su questo repository con le modifiche attuate.
Puoi aggiungere dei test per verificare il corretto funzionamento dell'applicazione.

E' possibile utilizzare / installare qualsiasi libreria e utilizzare ogni tipo di approccio per implementare le modifiche richieste.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
