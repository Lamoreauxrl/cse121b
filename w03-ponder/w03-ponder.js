//w03-ponder.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;
let targetAmmo = 3;

function isHit() {
    // return true if a randomly generated number is greater than 3, return false if less than or equal to 3
    return (Math.floor(Math.random() * 6) + 1) > 3;
    // if (target > 3) {
    //     return true;
    // }else {
    //     return false;
    // }
}

function shipCanFire(health, ammo) {
   return health > 0 && ammo > 0;
}

function isDestroyed(health) {
   return health <= 0;
}

function reloadShip() {
    shipAmmo += 3;
}

function reladTarget() {
    targetAmmo += 3;
}

function fireShip() {
    if (shipCanFire(shipHealth, shipAmmo)) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        }else{
            console.log("miss");
        }
    }else if (!isDestroyed(shipHealth)) {
        reloadShip();
        console.log("relaoding, shipHealth:", shipHealth);
    }
}

function enemyFire() {
    if (shipCanFire(targetHealth, targetAmmo)) {
        targetAmmo--;
        if (isHit()) {
            shipHealth--;
            console.log("enemy landed a hit - shipHealth:", shipHealth);
        }else{
            console.log("enemy missed");
        }
    }else if (!isDestroyed(targetHealth)) {
        reloadTarget();
        console.log("enemy reloading, targetHealth:", targetHealth);
    }
}

function encounter() {
    console.log("You see an enemy");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        enemyFire();
        if (isDestroyed(targetHealth)) {
            console.log("Targert eliminated");
        }
        if (isDestroyed(shipHealth)) {
            console.log("Ship destroyed");
        }
    }
}

encounter();