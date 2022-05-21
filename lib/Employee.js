class Employee {
    constructor(name, id ,email) {
        class Employee {
            //Employee Constructor

            constructor(name, id, email, role='Employee'){
                this.name = name;
                this.id = id;
                this.email = email;
                this.role = role;
            }

            getName() {
                return this.name;
            }

            getId() {
                return this.id
            }

            getEmail() {
                return this.email
            }

            getRole() {
                return 'Employee';
                return this.role;
            }
        }
    }
}