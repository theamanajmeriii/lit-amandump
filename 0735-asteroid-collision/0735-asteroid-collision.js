var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let alive = true;

        while (
            alive &&
            stack.length &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            let top = stack[stack.length - 1];

            if (top < -asteroid) {
                stack.pop();
            } else if (top === -asteroid) {
                stack.pop();
                alive = false;
            } else {
                alive = false;
            }
        }

        if (alive) stack.push(asteroid);
    }

    return stack;
};