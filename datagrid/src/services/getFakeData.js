async function getFakeData() {
    const url = 'https://raw.githubusercontent.com/truhin-andrei/fake_api/master/fakeDataBase1100.json'
    const response = await fetch(url);
    const data = await response.json();
    return  data;
}

export default getFakeData