
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

        // echo "${SOME}"
        // echo "${SOME}"
        // echo "${SOME}"
        // echo "${SOME}"

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

      stage('Build Docker'){

        withCredentials([string(credentialsId: 'github-creds', variable: 'CREDS')]) {

          echo "WORKSPACE: $WORKSPACE"

          dir('ansible') {
              // echo "https://github.com/zssvaidar/deploy-second-ansible.git"
              // git branch: 'deploy-second', url: "https://github.com/zssvaidar/deploy-second-ansible.git"
          }

          // ansiblePlaybook installation: 'ansible', inventory: "${WORKSPACE}/ansible/hosts",\
          //     playbook: '${WORKSPACE}/ansible/playbook.yml', vaultTmpPath: '',\
          //     extras: "-e SOME_TAG=123213 -e user=cicd -e artifact_fullpath=$ARTIFACT_FULL_PATH -e dest_path=/home/ansible/artifacts/\
          //             -e ansible_become_password=123412"

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