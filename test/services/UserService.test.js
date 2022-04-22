const UserService = require("./../../app/services/UserService")

describe("Unit Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "CarlosDaniel111", "Carlos")
        expect(user.username).toBe("CarlosDaniel111")
        expect(user.name).toBe("Carlos")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})