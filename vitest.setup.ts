import '@testing-library/jest-dom';

vi.mock('react', async () => {
    const actual = await vi.importActual('react');
    return {
        ...actual,
        useId: vi.fn(() => `mocked-id`)
    }
});
