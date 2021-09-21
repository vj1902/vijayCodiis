exports.getOption = async () => {
    let response;
    try {
      response = await fetch('http://127.0.0.1:8000/topic_name', {
        method: 'Get',
        headers:{
          "Content-Type": "application/json"
        }
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
}
