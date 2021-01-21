import { createId } from './Index'

export const initialState = {
	data: [
		{
			id: createId(),
			img: '',
			name: 'Varsine',
			completed: false,
			phoneOne: +37498594862,
			phoneTwo: +37498594862,
			email: 'varsine@gmail.com',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		},
		{
			id: createId(),
			img: '',
			name: 'Adrine',
			completed: false,
			phoneOne: +37498594862,
			phoneTwo: '101050000',
			email: 'varsine@gmail.com',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		},
		{
			id: createId(),
			img: '',
			name: 'Heno',
			completed: false,
			phoneOne: '098556221',
			email: 'varsine@gmail.com',
			phoneTwo: '101050000',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		},
		{
			id: createId(),
			img: '',
			name: 'Ashot',
			completed: false,
			email: 'varsine@gmail.com',
			phoneOne: '098556221',
			phoneTwo: '101050000',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		},
		{
			id: createId(),
			img: '',
			name: 'Razmik',
			completed: false,
			email: 'varsine@gmail.com',
			phoneOne: '098556221',
			phoneTwo: '101050000',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		},
		{
			id: createId(),
			img: '',
			name: 'Vagho',
			completed: false,
			email: 'varsine@gmail.com',
			phoneOne: '098556221',
			phoneTwo: '101050000',
			workplace: 'ShellLogix',
			address: 'A. Avetisyan',
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		}
	],
	currentData: [],
	isOpenPopup: false,
	isChecked: false
}
console.log(initialState.currentData)
