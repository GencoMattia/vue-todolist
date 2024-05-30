# vue-todolist

Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente



----- PASSAGGI -----
- creare una base di contenitori su html per contenere gli elementi vue
- preparare gli i data in vue.
    - un array di oggetti contenenti le tasks
- aggiungere un method che inverta la key done di ogni oggetto da true a false e vice versa
- agganciare con @click sull'elemento il method per sbarrare le task completate
- creare un method che usando splice e l'indice dell'elemento cliccato rimuova l'oggetto
- creare un elemento input in html.
- v-model sull'imput collegato ad una variabile data.
- creare una funzione legata all'input per aggiungere nuo nuovo oggetto alla lista con il value dell'imput come contenuto