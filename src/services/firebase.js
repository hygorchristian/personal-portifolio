import firebase, { firestore } from 'firebase';
import lodash from 'lodash';
import config from './firebaseConfig';

firebase.initializeApp(config);

const collections = {
  projetos: firestore().collection('projetos'),
  screenshots: firestore().collection('screenshots'),
  tecnologias: firestore().collection('tecnologias'),
};

export const getProjects = (callback) => {
  collections.projetos.orderBy('created_at').onSnapshot(async (snapshot) => {
    const dados = [];
    const tecnologias = [];
    snapshot.forEach((doc) => {
      const projeto = doc.data();
      projeto.tecnologias = [];
      dados.push(projeto);
    });

    const techs_snap = await collections.tecnologias.get();
    techs_snap.forEach((doc) => {
      tecnologias.push(doc.data());
    });

    for (const projeto of dados) {
      for (const tech_id of projeto.tecnologia_ids) {
        const tech = tecnologias.filter((item) => item.id === tech_id)[0];
        projeto.tecnologias.push(tech);
      }
    }


    callback(dados);
  });
};

export const getProjectBySlug = (slug, callback) => {
  console.log('fecthing');
  collections.projetos.where('slug', '==', slug).get().then(async (snapshot) => {
    const dados = [];

    snapshot.forEach((doc) => {
      dados.push(doc.data());
    });

    if (dados.length > 0) {
      const project = dados[0];
      callback(project);
    }
  });
};

export const getScreenshots = (id, callback) => {
  const screenshots = [];

  collections.screenshots
    .where('projeto_id', '==', id)
    .get()
    .then((screen_snap) => {
    screen_snap.forEach((doc) => screenshots.push(doc.data()));

    const ordered = lodash.orderBy(screenshots, 'ordem');

    callback(ordered);
  });
};
