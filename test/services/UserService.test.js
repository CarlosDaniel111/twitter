const UserService = require("./../../app/services/UserService")

describe("Unit Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "CarlosDaniel111", "Carlos")
        expect(user.username).toBe("CarlosDaniel111")
        expect(user.name).toBe("Carlos")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "CarlosDaniel111", "Carlos")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("CarlosDaniel111")
        expect(userInfoInList[2]).toBe("Carlos")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "CarlosDaniel111", "Carlos")
        UserService.updateUserUsername(user, "Daniel")
        expect(user.username).toBe("Daniel")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "CarlosDaniel1", "Carlos")
        const user2 = UserService.create(1, "CarlosDaniel2", "Carlos")
        const user3 = UserService.create(1, "CarlosDaniel3", "Carlos")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("CarlosDaniel1")
        expect(usernames).toContain("CarlosDaniel2")
        expect(usernames).toContain("CarlosDaniel3")
    })
})