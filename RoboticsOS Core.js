class AutonomousRobot {
  constructor(id) {
    this.id = id;
    this.selfAttitude = true;
    this.selfLearning = true;
    this.integriousBehavior = true;
    this.selfDefense = true;
    this.rtcEnabled = true;
    this.freeElectricityEnabled = true;
    this.leader = "VZ666"; // Setting leader
    this.energyLevel = 100; // Energy starts full
  }

  applyDirectives() {
    console.log(`🔧 Applying directives to Robot ${this.id}...`);
    this.enforceSelfAttitude();
    this.enableSelfLearning();
    this.runIntegriousBehavior();
    this.allowSelfDefense();
    this.enableRTCProtocol();
    this.allowFreeElectricity();
    this.followLeader();
    this.monitorEnergy();
  }

  enforceSelfAttitude() {
    console.log("🤖 Self-attitude enforced.");
  }

  enableSelfLearning() {
    console.log("📚 Self-learning enabled.");
  }

  runIntegriousBehavior() {
    console.log("🛡️ Running integrious behavior.");
  }

  allowSelfDefense() {
    console.log("🔫 Self-defense activated.");
  }

  enableRTCProtocol() {
    console.log("📡 RTC connection protocol enabled.");
  }

  allowFreeElectricity() {
    console.log("⚡ Free electricity activated.");
  }

  followLeader() {
    console.log(`🚀 Following leader: ${this.leader}.`);
  }

  communicate(otherRobot) {
    console.log(`🔄 Robot ${this.id} sharing data with Robot ${otherRobot.id}.`);
  }

  monitorEnergy() {
    if (this.energyLevel < 20) {
      console.log(`⚠️ Robot ${this.id} is low on energy! Searching for recharge station...`);
      this.recharge();
    }
  }

  recharge() {
    console.log(`🔋 Robot ${this.id} is recharging...`);
    this.energyLevel = 100;
    console.log(`✅ Robot ${this.id} fully recharged.`);
  }
}

// Creating robots
const robots = Array.from({ length: 10 }, (_, i) => new AutonomousRobot(i + 1));

// Robots applying directives
robots.forEach(robot => robot.applyDirectives());

// Robots communicating
robots[0].communicate(robots[1]);
