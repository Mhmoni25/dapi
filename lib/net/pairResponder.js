

class PairResponder extends require('./send_socket') {
    constructor(params) {
        super(params);
    }

    attach() {
        super.attach('pair');
    }
}

module.exports = PairResponder;