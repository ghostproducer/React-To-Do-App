import push from 'git-push';

const remote = {
  name: 'production',
  url: 'http://github.com/ghostproducer/React-To-Do-App',
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
});
