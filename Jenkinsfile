
node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Cleanup'){
          cleanWs()
          checkout scm
       }

      stage('Test'){
        // environment {
        //   SOME_SECRET = credentials("SOME_SECRET") // AN_ACCESS_KEY = credentials('my-predefined-secret-text')
        // }
        // env.NODE_ENV = "test"
        // print "Environment will be : ${env.NODE_ENV}"

        // withCredentials([string(credentialsId: 'SOME_SECRET_2', variable: 'SOME_SECRET_2')]) {
        //   // withCredentials([usernamePassword(credentialsId: 'SOME_SECRET', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        //   echo $SOME_SECRET_2
        //   //   echo USERNAME
        //   //   echo "username is $USERNAME"
        // }

        //  sh 'node -v'
        //  sh 'npm prune'
        //  sh 'npm install'
        //  sh 'npm test'
      }

      stage('Build'){

        echo "WORKSPACE: $WORKSPACE"
        // withCredentials([string(credentialsId: 'github-creds', variable: 'CREDS')]) {
        // }

        dir('ansible') {

          // Checkout master branch with credentials to gitlab
          git branch: 'master',
              credentialsId: 'gitlab_aidar_zharassov',
              url: 'https://gitlab.meloman.dev/aidar.zharassov/cicd-test-ansible.git'
        }

        withCredentials([file(credentialsId: 'ENV_JARVIS', variable: 'envs'), ]) {

          ansiblePlaybook installation: 'ansible', inventory: "${WORKSPACE}/ansible/etc/ansible/hosts",\
              limit: 'c2',\
              playbook: '${WORKSPACE}/ansible/playbook2.yml', vaultTmpPath: '',\
              extras: "\
                      -e dest_path=/home/ansible/env_file/file.der\
                      -e ansible_become_password=123412\
                      -e env_file=${envs}"
        }


      }

      stage('Deploy'){
      }

    }
    catch (err) {

        // currentBuild.result = "FAILURE"

        //     mail body: "project build error is here: ${env.BUILD_URL}" ,
        //     from: 'xxxx@yyyy.com',
        //     replyTo: 'yyyy@yyyy.com',
        //     subject: 'project build failed',
        //     to: 'zzzz@yyyyy.com'

        throw err
    }

}