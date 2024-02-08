
node {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

      stage('Test'){
        
        // environment {
        //   SOME_SECRET = credentials("SOME_SECRET") // AN_ACCESS_KEY = credentials('my-predefined-secret-text')
        // }
        env.NODE_ENV = "test"

        print "Environment will be : ${env.NODE_ENV}"

        echo "${SOME}"
        echo "${SOME}"
        echo "${SOME}"
        echo "${SOME}"

        withCredentials([string(credentialsId: 'SOME_SECRET', variable: 'SOME_SECRET')]) {
          // withCredentials([usernamePassword(credentialsId: 'SOME_SECRET', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          echo "${env.SOME_SECRET}"

          //   echo USERNAME

          //   echo "username is $USERNAME"
        }


        //  sh 'node -v'
        //  sh 'npm prune'
        //  sh 'npm install'
        //  sh 'npm test'

      }

       stage('Build Docker'){

            echo 'dockerBuild.sh'
       }

       stage('Deploy'){

         echo 'Push to Repo'
        //  sh './dockerPushToRepo.sh'

         echo 'ssh to web server and tell it to pull new image'
        //  sh 'ssh deploy@xxxxx.xxxxx.com running/xxxxxxx/dockerRun.sh'

       }

       stage('Cleanup'){

         echo 'prune and cleanup'
        //  sh 'npm prune'
        //  sh 'rm node_modules -rf'

        //  mail body: 'project build successful',
        //              from: 'xxxx@yyyyy.com',
        //              replyTo: 'xxxx@yyyy.com',
        //              subject: 'project build successful',
        //              to: 'yyyyy@yyyy.com'
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