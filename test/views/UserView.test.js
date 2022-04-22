const UserView = require("./../../app/views/UserView")

describe("Unit Tests for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "CarlosDaniel111"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Create an user by a given a valid payload", () => {
        const payload = {username: "CarlosDaniel111", name: "Carlos", id: 1}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("Carlos")
        expect(result.username).toBe("CarlosDaniel111")
        expect(result.id).toBe(1)
    })
})