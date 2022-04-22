const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test("Create an User object", () => {
        const user = new User(1, "CarlosDaniel111", "Carlos", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("CarlosDaniel111")
        expect(user.name).toBe("Carlos")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})