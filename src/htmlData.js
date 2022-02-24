const htmlData = [
    {
        id: 1,
        name: 'Red',
        code: `<style>
            h1 {
                color: red;
            }
        </style>
        <h1>Red</h1>`
    },
    {
        id: 2,
        name: 'Blue',
        code: `<style>
            h1 {
                color: blue;
            }
        </style>
        <h1>Blue</h1>
        <button class="bg-gray-200 my-2 px-2 py-1 rounded shadow hover:bg-gray-600 hover:text-white" onclick="showAlertBlue()">Click Me!</button>
        <script type="text/javascript">
            console.log('dsa');
            function showAlertBlue () {
                alert('Show Alert')
            }
        </script>`
    },
    {
        id: 3,
        name: 'Green',
        code: `<style>
            h1 {
                color: green;
            }
        </style>
        <h1 class="text-3xl">Green</h1>
        <button class="bg-gray-200 my-2 px-2 py-1 rounded shadow hover:bg-gray-600 hover:text-white" onclick="showAlert()">Click Me!</button>
        `,
        JavaScriptCode: `
            console.log('dsa');
            function showAlert () {
                alert('Show Alert')
            }
        `
    }
]

export default htmlData;