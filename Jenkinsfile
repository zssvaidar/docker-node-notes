
node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Cleanup'){
          cleanWs()
          def scmVars = checkout scm
          env.GIT_COMMIT = scmVars.GIT_COMMIT

          def lastCommitHash = getLastSuccessfulCommitHash()
          if (lastCommitHash) {
              println "Last successful build's commit hash: ${lastCommitHash}"
          } else {
              println "No successful builds found or no commit hash available."
          }
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

      def values = "$JOB_NAME".tokenize( '/' )
      def PARENT_JOB_NAME = values[0]
      def artifact_name = "${BUILD_NUMBER}_${PARENT_JOB_NAME}_${BRANCH_NAME}.zip"
      def ARTIFACT_PATH = "$JENKINS_HOME/jobs/$PARENT_JOB_NAME/branches/${BRANCH_NAME}/builds/${BUILD_NUMBER}/archive"
      def ARTIFACT_FULL_PATH = "$ARTIFACT_PATH/${artifact_name}"

      stage('Build'){

        echo "JENKINS_HOME: $JENKINS_HOME"
        echo "WORKSPACE: $WORKSPACE"
        echo "Artifact path: $ARTIFACT_PATH"
        echo "Artifact fullpath: $ARTIFACT_FULL_PATH"
        echo "GIT_COMMIT: ${env.GIT_COMMIT}"
        // zip zipFile: "${artifact_name}", archive: true, glob: '**/*'
/* 
        dir('ansible') {
          // Checkout master branch with credentials to gitlab
          git branch: 'master',
              credentialsId: 'gitlab_aidar_zharassov',
              url: 'https://gitlab.meloman.dev/aidar.zharassov/cicd-test-ansible.git'
        }

        dest_artifacts_path = "/home/ansible/artifacts"
        dest_env_path = "/home/ansible/env_file/file.der"

        withCredentials([file(credentialsId: 'ENV_JARVIS', variable: 'envs'), ]) {

          ansiblePlaybook installation: 'ansible',\
              inventory: "${WORKSPACE}/ansible/etc/ansible/hosts",\
              limit: 'c2',\
              playbook: '${WORKSPACE}/ansible/playbook2.yml', vaultTmpPath: '',\
              extras: "\
                      -e artifact_fullpath=$ARTIFACT_FULL_PATH\
                      -e dest_artifacts_path=$dest_artifacts_path\
                      -e dest_env_path=$dest_env_path\
                      -e ansible_become_password=123412\
                      -e env_file=${envs}"
        }
 */
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


def getLastSuccessfulCommitHash() {
  def lastSuccessfulBuild = currentBuild.rawBuild.getPreviousSuccessfulBuild()
  if (lastSuccessfulBuild) {
      def actions = lastSuccessfulBuild.getActions()
      for (action in actions) {
          def lastBuiltRevision = action.getLastBuiltRevision()
          if (lastBuiltRevision) {
              return lastBuiltRevision.getSha1String()
          }
      }
  }
  return null
}