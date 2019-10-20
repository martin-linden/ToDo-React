import firebase from 'firebase';
import { TodoItem } from '../../models/TodoItem';

export default class TodoRepo {
	// Etablerar en funktion som ger oss en lista
	// med alla våra dokument
	GetAllTodos = () =>
		firebase.firestore().collection('todos').get().then((snapshot) => {
			// Vi får en "Snapshot" från vår database
			// som innehåller alla våra dokument tillsammans
			// med en del skräp (metadata). Vi till ta ut
			// endast todo-värdet för vartenda dokument.
			// Sammanfattningsvis: Får snapshot, vill ha todos
			return snapshot.docs.map((doc) => {
				// Så vi arbetar med vår lista av dokument,
				// .map() betyder att vi skickar tillbaks någonting
				// för var dokument i listan. Det vi vill att .map()
				// skickar tillbaks är vårt värde för vår todo
				// .value är det som du skrev som fältnamn i firebase,
				// detta kan vara .förnamn eller .efternamn om du
				// har detta istället, spelar ej roll
				// Vi vill berätta att .value är en sträng, därav
				// "as string"
				return {
					id: doc.id,
					value: doc.data().value
				};
			});
		});

	AddNewTodo = (todo: TodoItem) =>
		firebase.firestore().collection('todos').add({ value: todo });

	RemoveTodoById = (id: string) =>
		firebase.firestore().collection('todos').doc(id).delete();
}
