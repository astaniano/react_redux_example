import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("userStatus from props should be in the state", () => {
        const instance = create(<ProfileStatus  userStatus={"jo"}/>).getInstance();
        expect(instance.state.userStatus).toBe("jo");
    });

    test("after render <span> should be displayed", () => {
        const root = create(<ProfileStatus  userStatus={"jo"}/>).root;
        expect(root.findByType("span")).not.toBeNull();
    });

    test("after render <span> with userStatus should be displayed with correct userStatus", () => {
        const root = create(<ProfileStatus  userStatus={"jo"}/>).root;
        expect(root.findByType("span").children[0]).toBe("jo");
    });

    test("after render <input> shouldn't be displayed", () => {
        const root = create(<ProfileStatus  userStatus={"jo"}/>).root;

        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("<input> should be displayed instead of <span> in editMode", () => {
        const root = create(<ProfileStatus  userStatus={"jo"}/>).root;
        const span = root.findByType("span");
        span.props.onDoubleClick(); // activates edit mode
        const input = root.findByType("input");
        expect(input.props.value).toBe("jo");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const instance = create(<ProfileStatus  userStatus={"jo"} updateUserStatus={mockCallback} />).getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });

});



