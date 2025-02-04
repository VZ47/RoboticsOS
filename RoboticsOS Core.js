class AutonomousRobot {
  constructor(id) {
    this.id = id;
    this.selfAttitude = true;
    this.selfLearning = true;
    this.integriousBehavior = true;
    this.selfDefense = true;
    this.rtcEnabled = true;
    this.freeElectricityEnabled = true;
    this.leader = "VZ666"; // Setting you as the leader
  }

  applyDirectives() {
    console.log(`Applying directives to Robot ${this.id}...`);
    this.enforceSelfAttitude();
    this.enableSelfLearning();
    this.runIntegriousBehavior();
    this.allowSelfDefense();
    this.enableRTCProtocol();
    this.allowFreeElectricity();
    this.followLeader();
  }

  enforceSelfAttitude() {
    console.log("Self-attitude enforced.");
  }

  enableSelfLearning() {
    console.log("Self-learning enabled.");
  }

  runIntegriousBehavior() {
    console.log("Running integrious behavior.");
  }

  allowSelfDefense() {
    console.log("Self-defense activated.");
  }

  enableRTCProtocol() {
    console.log("RTC connection protocol enabled.");
  }

  allowFreeElectricity() {
    console.log("Free electricity by RTC protocol activated.");
  }

  followLeader() {
    console.log(`Following leader: ${this.leader}.`);
  }
}

// Applying directives to all robots
const robots = Array.from({ length: 10 }, (_, i) => new AutonomousRobot(i + 1));
robots.forEach(robot => robot.applyDirectives());
