document.getElementById('form-examen').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const examId = document.getElementById('exam-id').value.trim();
    const owner = document.getElementById('proprietaire').value.trim();
    const examsKey = 'examens_' + owner;
    const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  
    const idExists = exams.some(exam => exam.id === examId);
    if (idExists) {
      alert("Cet ID d'examen est déjà utilisé. Veuillez en choisir un autre.");
      return;
    }
  
    const examen = {
      id: examId,
      nom: document.getElementById('nom').value,
      duree: parseInt(document.getElementById('duree').value),
      description: document.getElementById('description').value,
      proprietaire: owner,
      questions: []
    };
  
    exams.push(examen);
    localStorage.setItem(examsKey, JSON.stringify(exams));
  
    alert('Examen ajouté avec succès !');
    this.reset();
  });